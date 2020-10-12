node {
    stage('Git Pull') {
        git 'https://github.com/ShroXd/vue-bebop.git'
    }

    stage('Build Image') {
        try {
            sh 'docker stop vue-bebop'
            sh 'docker rm vue-bebop'
            sh 'docker rmi vue-bebop'
        }
        catch (exc) {
            echo '无需清理容器残余'
        }
        finally {
            sh 'docker build -t vue-bebop:latest .'
        }
    }

    stage('Deploy') {
        try {
          sh 'docker run -p 18080:80 --name vue-bebop -d vue-bebop'
        }
        catch (exc) {
          echo '运行容器失败'
          sh 'docker stop vue-bebop'
          sh 'docker rm vue-bebop'
          sh 'docker run -p 18020:80 --name vue-bebop -d vue-bebop'
        }
    }

}
