import iris


def main():
    connection_string = "k8s-8191a2c1-a2a184fb-85ee74c36b-680b624432427f52.elb.us-east-2.amazonaws.com:1972/USER"
    username = "SQLAdmin"
    password = ".Roarfile22"

    connection = iris.connect(connection_string, username, password)


if __name__ == "__main__":
    main()
