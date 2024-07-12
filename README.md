# Random User API Performance Test

This repository contains performance tests for the Random User API, including load and stress tests.

## Files

- `random_user_load_test.jmx`: JMeter test plan for load testing.
- `random_user_stress_test.jmx`: JMeter test plan for stress testing.
- `resources/`: Directory containing the Excel reports of the load and stress tests.

## Transaction Per Second (TPS
https://docs.google.com/spreadsheets/d/1IXxjnmFUJjXRi-w8IJoCOx-mDVJojEjFbuZXhQtLSj0/edit?usp=sharing

![image](https://github.com/user-attachments/assets/6bdf9321-d3fc-4c8d-9ba6-ab8a24447734)




## Load Test Report
https://docs.google.com/spreadsheets/d/1kpzT0rZ2Ob8ahg7ZCHoT0dFRJZKL6yNHvZXHzElKN4k/edit?usp=sharing

![image](https://github.com/user-attachments/assets/17ab68a1-f5ec-485e-8c11-8f4c34b210b7)


## Stress Test Report
https://docs.google.com/spreadsheets/d/1kpzT0rZ2Ob8ahg7ZCHoT0dFRJZKL6yNHvZXHzElKN4k/edit?usp=sharing

![image](https://github.com/user-attachments/assets/df9cd33a-44ce-4bc0-ab38-da215ba5e8e6)


## JMeter HTML Report

![image](https://github.com/user-attachments/assets/ab566cf4-ce79-461b-a370-f01621213499)




## How to Run the Test

1. Ensure JMeter is installed.
2. Run the following commands from the JMeter `bin` directory:

   ```sh
   ./jmeter -n -t /path/to/Random-User-API-Performance-Test/random_user_load_test.jmx -l /path/to/Random-User-API-Performance-Test/results/load_test_results.csv -e -o /path/to/Random-User-API-Performance-Test/reports/load_test_report
   ./jmeter -n -t /path/to/Random-User-API-Performance-Test/random_user_stress_test.jmx -l /path/to/Random-User-API-Performance-Test/results/stress_test_results.csv -e -o /path/to/Random-User-API-Performance-Test/reports/stress_test_report
