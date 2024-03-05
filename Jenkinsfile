pipeline {
  agent any
  
  environment {
    PORT = '4000' 
    APP_NAME = 'TESLO-SHOP-APP' 
  }
  
  stages {
    stage('Detener contenedor Docker') {
      steps {
        script {
          try {
            sh "docker stop $APP_NAME"
          } catch (Exception e) {
            echo "No se encontró ningún contenedor en ejecución con el nombre $APP_NAME"
          }
        }
      }
    }
    
    stage('Eliminar imagen y contenedor Docker') {
      steps {
        script {
          try {
            sh "docker rm $APP_NAME"
            sh "docker rmi teslo-shop"
          } catch (Exception e) {
            echo "No se encontró ninguna imagen o contenedor con los nombres especificados"
          }
        }
      }
    }
    
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