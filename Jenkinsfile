pipeline {
    agent {
        docker {
            image 'node:8-alpine'
        }
    }
    environment {
       CI = 'true'
   }
    stages {
        stage('prepare') { 
            steps {
                sh 'whoami'
                sh 'node --version'
                sh 'npm --version'
                sh './jenkins/scripts/prepare.sh'
            }
        }
        stage('build') { 
            steps {
                sh './jenkins/scripts/build.sh' 
            }
        }
        stage('deploy') { 
            steps {
              sh './jenkins/scripts/deliver.sh'
            }
        }
    }
}