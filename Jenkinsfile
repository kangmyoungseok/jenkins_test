pipeline {
    agent any

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Deploy') {
            steps {
                sh 'pm2 stop your_app_name || true'
                sh 'pm2 start app.js --name your_app_name'
            }
        }
    }
}