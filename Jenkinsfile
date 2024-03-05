
pipeline {
     agent any
    
    environment {
        APP_NAME = 'teslo-shop'
        APP_PATH = '/var/www/teslo-shop/'
    }
    
    stages {
      
        
        stage('Instalar Dependencias') {
            steps {
                sh 'npm install'
            }
        }
        
        stage('Construir y Empaquetar') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Detener Aplicación con PM2') {
            steps {
                sh "pm2 stop $APP_NAME || true"
            }
        }
        
        stage('Copiar Archivos a la VPS') {
            steps {
                sh "cp -r * $APP_PATH"
            }
        }
        
        stage('Actualizar Dependencias en la VPS') {
            steps {
                sh "cd $APP_PATH && npm install"
            }
        }
        
        stage('Iniciar Aplicación con PM2') {
            steps {
                sh "pm2 start index.js --name $APP_NAME "
            }
        }
  /*  agent any
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
          
         stage('Build app') {
            steps {
                sh 'npm run build'
            }
        }
    
         stage('Up new instaces') {
            steps {
                sh 'sudo pm2 start $(which npm) --name "teslo-shop" -- start --port 4000 --prefix /var/www/teslo-shop/'
            }
        }
       
        stage('other') {
            steps {
                sh 'pm2 status'
            }
        }
        
    }*/
}