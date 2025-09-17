# Doctor Appointment Website 🥼
A doctor appointment website build with mongodb, express, reactjs and nodejs.

# 💡About this project 
Doctor Appointment website quite useful website. In this project it consists of 3 parts. First one is backend, second one is frontend and last one is admin. You can easly sign up and sign in that page. And then you can see home, all doctors , about and contact page. If you go to the all doctor page you can choose specialization of doctor. If you choose one doctor after doing that immediately will going to the doctor personel page, and then you will choose easely appontment date. If maybe you change you desicion, you should profile page and cancel you appointment. I gave some rights the admin panel. A few of them, add a doctor personel information, graduation, specialization and picture and so on. This website I made three weeks it took quite such a long time but it's very developing myself and learn lots of new things.

## ⚡Technologies
* `MONGODB`
* `EXPRESS`
* `REACT JS`
* `NODE JS`
* `TAILWINDCSS`

## 🛠 Dependecies
* `AXIOS`
* `REACT ROUTER`
* `REACT TOASTIFY`

## 🚦 Running the Project

To run the project in your local environment, follow these steps: ⬇️

## 1️⃣ You need: 
- create cluster what ever you like in local using (kind or minikube(I prefer minikube)) or in AWS if you have money

## 2️⃣ There is configmap file in k8s folder which act as a environment file for application

## how to run this 
- first install docker and docker compose on your node and then run the command below for all there folders then you will get 3 images ad push them to DOCKER HUB using Docker push command .
- `docker build -t xxxxxxxxxxxxxxx < \path\of\the\folder > `

- then first apply configmaps using
  * ` kubectl apply comfigmap.yaml`
- then do same for all .yaml files while checking pods are working or not 

## 3 importent 
- dont forget to change the configmap variabes before you apply it
  

