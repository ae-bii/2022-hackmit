#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Oct  1 20:00:23 2022

@author: kosiugorji
"""

import iris 


    

def main():
    connection_string = "k8s-8191a2c1-a2a184fb-85ee74c36b-680b624432427f52.elb.us-east-2.amazonaws.com:1972/USER"
    username = "SQLAdmin"
    password = ".Roarfile22"
    
    connection = iris.connect(connection_string, username, password)
    
    cursor = connection.cursor()
    
    sql_command =  """ CREATE ML CONFIGURATION pmml_configuration PROVIDER PMML USING {"file_name" : {model_path}},
    SET ML CONFIGURATION pmml_configuration,
    CREATE MODEL ml_model PREDICTING ({result}) WITH ({metrics}),
    TRAIN MODEL model FROM data,
    SELECT * FROM data
    """
    cursor.execute(sql_command)

if __name__ == "__main__":
    main()

