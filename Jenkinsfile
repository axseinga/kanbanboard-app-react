pipeline{
    agent any

    options {
        timestamps()
        skipDefaultCheckout true
    }

    stages{
        stage('Deploy') {
            steps {
                script {
                    sh 'npm run deploy'
                }
            }
        }
    }

    post {
        always {
            script {
                cleanWs()
            }
        }
    }
}
