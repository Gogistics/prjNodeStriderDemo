#Simple NodeJS App for Strider CI/CD Demo
In this tutorial, we're going to learn how to use Strider ssh deployment plugin

1. Ceate user called **app** and then logout

```
root@my_host$ adduser app

root@my_host$ usermod -G sudo,docker app
```

2. Login as user, **app**, and check if **app* is able to run docker

```
app@my_host@$ docker info

app@my_host@$ docker ps
```

3. Create **.ssh** folder under home directory, create a file **authorized_keys** under .ssh folder, and then copy and paste the Public Key from Strider to **authorized_keys**

```
app@my_host:~$ mkdir .ssh

app@my_host:~$ nano .ssh/authorized_keys
```

###### Ref.

[Strider SSH Deploy](https://futurestud.io/blog/strider-continuous-deployment-to-any-server-via-ssh)

[Setting Up Continuous Integration & Continuous Deployment With Jenkins](http://code.tutsplus.com/tutorials/setting-up-continuous-integration-continuous-deployment-with-jenkins--cms-21511)
