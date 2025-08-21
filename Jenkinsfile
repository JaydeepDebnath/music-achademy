pipeline {
    agent any 

    environment {
        DOCKER_IMAGE = 'jay0604/nextjs-app'
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/JaydeepDebnath/music-achademy.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                sh "docker build -t $DOCKER_IMAGE:$BUILD_NUMBER ."
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withCredentials([usernamePassword(credentialsId: 'dockerhub', usernameVariable: 'USER', passwordVariable: 'PASS')]) {
                    sh "echo $PASS | docker login -u $USER --password-stdin"
                    sh "docker push $DOCKER_IMAGE:$BUILD_NUMBER"
                }
            }
        }

        stage('Deploy Container') {
            steps {
                sh "docker run -d -p 3000:3000 --name nextjs-app-$BUILD_NUMBER $DOCKER_IMAGE:$BUILD_NUMBER"
            }
        }
    }
}
