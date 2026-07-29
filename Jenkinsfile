pipeline {
    agent any

    environment {
        DOCKERHUB_USERNAME = "shrawanipawal4848"
        BACKEND_IMAGE = "${DOCKERHUB_USERNAME}/three-tier-backend:latest"
        FRONTEND_IMAGE = "${DOCKERHUB_USERNAME}/three-tier-frontend:latest"
    }

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Build Backend Image') {
            steps {
                sh 'docker build -t $BACKEND_IMAGE ./backend'
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t $FRONTEND_IMAGE ./frontend'
            }
        }

        stage('Docker Hub Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: 'dockerhub-creds',
                    usernameVariable: 'DOCKER_USER',
                    passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh 'echo $DOCKER_PASS | docker login -u $DOCKER_USER --password-stdin'
                }
            }
        }

        stage('Push Backend Image') {
            steps {
                sh 'docker push $BACKEND_IMAGE'
            }
        }

        stage('Push Frontend Image') {
            steps {
                sh 'docker push $FRONTEND_IMAGE'
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl apply -f kubernetes/mysql-deployment.yaml
                kubectl apply -f kubernetes/mysql-service.yaml
                kubectl apply -f kubernetes/backend-deployment.yaml
                kubectl apply -f kubernetes/backend-service.yaml
                kubectl apply -f kubernetes/frontend-deployment.yaml
                kubectl apply -f kubernetes/frontend-service.yaml
                '''
            }
        }

        stage('Verify Deployment') {
            steps {
                sh 'kubectl get pods'
                sh 'kubectl get svc'
            }
        }
    }

    post {
        success {
            echo '🎉 CI/CD Pipeline completed successfully!'
        }

        failure {
            echo '❌ Pipeline failed.'
        }
    }
}
