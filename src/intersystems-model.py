#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Created on Sat Oct  1 20:00:23 2022

@author: kosiugorji
"""

import iris 

model_file_name = <model file name>

def test_model(data, model_path):
    USING {"file_name" : model_path}
    CREATE ML CONFIGURATION pmml_configuration PROVIDER PMML USING {"file_name" : "C:\PMML\pmml_house_model.xml"}
    SET ML CONFIGURATION pmml_configuration
    CREATE MODEL HousePriceModel PREDICTING (Price) WITH (TotSqft numeric, num_beds integer, num_baths numeric)
    TRAIN MODEL HousePriceModel FROM HouseData
    SELECT * FROM NewHouseData WHERE PREDICT(HousePriceModel) > 500000
    

def main():
    connection_string = "k8s-8191a2c1-a2a184fb-85ee74c36b-680b624432427f52.elb.us-east-2.amazonaws.com:1972/USER"
    username = "SQLAdmin"
    password = ".Roarfile22"
    
    connection = iris.connect(connection_string, username, password)
    test_model()
    
    
    

if __name__ == "__main__":
    main()
