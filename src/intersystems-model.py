#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Oct  1 20:00:23 2022

@author: kosiugorji
"""

import iris 
import pandas as pd

def main():
    
    data_file_path = "/Users/kosiugorji/Desktop/Roaree/Iris.csv"
    data = pd.read_csv (data_file_path)
    df = pd.DataFrame(data)
    
    # Connect to SQL Server
    connection_string = "k8s-8191a2c1-a2a184fb-85ee74c36b-680b624432427f52.elb.us-east-2.amazonaws.com:1972/USER"
    username = "SQLAdmin"
    password = ".Roarfile22"
    
    connection = iris.connect(connection_string, username, password)
    
    
    cursor = connection.cursor()
    
    # Create Table
    cursor.execute('''
    		CREATE TABLE iris_data (
    			sepal_length int,
                sepal_width int,
                petal_length int, 
                petal_width int,
                class varchar(255)
                )
                   ''')
    
    # Insert DataFrame to Table
    for row in df.itertuples():
        cursor.execute('''
                    INSERT INTO products (product_id, product_name, price)
                    VALUES (?,?,?)
                    ''',
                    row.sepal_length, 
                    row.sepal_width,
                    row.petal_length, 
                    row.petal_width,
                    row.category
                    )
    connection.commit()
    
    cursor.execute('''
                   CREATE MODEL model1 PREDICTING( class ) FROM iris_data_set
                   
                   ''')
                   
    cursor.execute('''
                   TRAIN MODEL model1
                   
                   ''')  
    cursor.execute('''
                   SELECT PREDICT( model1 ) FROM iris_data_set
                   '''
        )               
                  



if __name__ == "__main__":
    main()

