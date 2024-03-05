pipeline {
    agent any
    
    environment {
        PORT = '4000' // Puerto en el que se está ejecutando la aplicación
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
     stage('Detener Aplicación') {
    steps {
        script {
            sh "fuser -k ${env.PORT}/tcp"
        }
    }
}
        
        stage('Iniciar Aplicación con PM2') {
            steps {
                sh "npm start --silent -- --port ${env.PORT} &"
            }
        }
    }
}