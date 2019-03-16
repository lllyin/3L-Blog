pipeline {
    agent {
        docker {
            image 'node:8-alpine'
        }
    }
    environment {
       CI = 'true'
       BUILD_ID = 'DONTKILLMEPLEASE'
   }
    stages {
        stage('prepare') { 
            steps {
                sh 'whoami'
                sh 'echo $BUILD_ID'
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