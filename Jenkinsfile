pipeline {
  agent none
  stages {
    stage('Deploy') {
      steps {
        sh '''cd C:\\Desenv\\outros\\core-server
pm2 deploy production'''
      }
    }
  }
}