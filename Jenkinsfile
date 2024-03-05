pipeline {
    agent any
    
    environment {
        PORT = '4000' // Puerto en el que se está ejecutando la aplicación
        APP_NAME = 'TESLO-SHOP-APP' // Puerto en el que se está ejecutando la aplicación
    }
    
    stages {
      
        stage('Docker build') {
            steps {
                sh 'docker build -t teslo-shop .'
            }
        }
        stage('Instalar Dependencias') {
            steps {
                sh "docker run -dp $PORT:3000 --name $APP_NAME teslo-shop"
            }
        }
        
    }
}