pipeline {
    agent any
    
    environment {
        PORT = '4000' // Puerto en el que se está ejecutando la aplicación
    }
    
    stages {
      
        stage('Docker build') {
            steps {
                sh 'docker build -t teslo-shop .'
            }
        }
        stage('Instalar Dependencias') {
            steps {
                sh 'docker run -dp 3000:3000 teslo-shop'
            }
        }
        
    }
}