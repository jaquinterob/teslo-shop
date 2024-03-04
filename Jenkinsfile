
pipeline {
    agent any
    stages {
         stage('move app files') {
            steps {
                sh 'cp -r * /var/www/teslo-shop/'
            }
        }
            
        stage('npm install') {
            steps {
                sh 'npm install'
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
        
         stage('Build app') {
            steps {
                sh 'npm run build'
            }
        }
    
         stage('Up new instaces') {
            steps {
                sh 'pm2 start $(which npm) --name "teslo-shop" -- start --port 4000 --prefix /var/www/teslo-shop/'
            }
        }
       
        stage('other') {
            steps {
                sh 'pm2 status'
            }
        }
        
    }
}