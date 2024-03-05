pipeline {
    agent any
    
    environment {
        PORT = '4000' // Puerto en el que se está ejecutando la aplicación
    }
    
    stages {
        stage('Clonar Repositorio') {
            steps {
                git branch: 'main', url: 'url_de_tu_repositorio.git'
            }
        }
        
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
                    sh "lsof -ti:${env.PORT} | xargs kill"
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