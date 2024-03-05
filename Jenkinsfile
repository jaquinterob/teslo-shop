pipeline {
    agent any
    
    environment {
        PORT = '4000' // Puerto en el que se está ejecutando la aplicación
    }
    
    stages {
      
        
        stage('Instalar Dependencias') {
            steps {
                sh 'docker run -dp 4000:3000 teslo-shop'
            }
        }
        
    }
}