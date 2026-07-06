pipeline {

    agent any

    stages {

        stage('Checkout') {

            steps {
                echo 'Checking out code...'
                checkout scm
            }

        }

        stage('Build') {

            steps {
                echo 'Building Project...'
            }

        }

        stage('Test') {

            steps {
                echo 'Running Tests...'
            }

        }

        stage('Deploy') {

            steps {
                echo 'Deploying Application...'
            }

        }

    }

    post {

        always {
            echo 'Pipeline Finished'
        }

        success {
            echo 'Build Successful'
        }

        failure {
            echo 'Build Failed'
        }

    }

}
