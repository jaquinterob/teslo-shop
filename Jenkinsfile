
pipeline {
    agent any
    stages {
        stage('npm install') {
            steps {
                sh 'npm install'
            }
        }
        stage('Build app') {
            steps {
                sh 'npm run build'
            }
        }
        /*stage('Stop last instances') {
            steps {
                sh 'pm2 stop teslo-shop'
            }
        }
        stage('Remove last instances') {
            steps {
                sh 'pm2 delete teslo-shop'
            }
        }*/
         stage('Up new instaces') {
            steps {
                sh 'pm2 start npm --name "teslo-shop" -- start -p 3001'
            }
        }
    }
}