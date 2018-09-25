const assert = require('chai').assert;
const Task = require('../server/controllers/task');
const chai = require('chai');
const chaiHttp = require('chai-http');

let should = chai.should();
let expect =chai.expect;
chai.use(chaiHttp);

//add task--test case 1----
describe('/login', () => {
    it('Login a user', (done) => {
        let user = {
            username: "thili",
            password: "thili",
        }
        chai.request('http://localhost:3000')
            .post('/user/login')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.body).to.have.property('token');
                let token = "Bearer " + res.body.token;
                      
              describe('Task',()=>{
                    it('should add a SINGLE Task on /Task POST',(done)=>{
                        chai.request('http://localhost:3000')
                        .post('/task/task')
                        .set('Authorization', token)
                        .send({
                        'taskname':'pojectone',
                        'member': 'sujwa senarth serasinha',
                        'allocatedDate':'2018-11-08T00:00:00.000Z',
                        'Duedate':'2018-11-08T00:00:00.000Z',
                        'description':'plese do it  on time'})
                        .end(function(err, res){
                        res.should.have.status(200);

                        //expect(res.statusCode).to.equal(200);
                          done();
                        });
                    })
                })
                done();
            });
    });
});



//get all tasks  --test case 2----
describe('/login', () => {
    it('Login a user', (done) => {
        let user = {
            username: "thili",
            password: "thili",
        }
        chai.request('http://localhost:3000')
            .post('/user/login')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.body).to.have.property('token');
                let token = "Bearer " + res.body.token;
                describe('tasks', () => {
                    it('should list ALL tasks on /tasks GET',(done) => {
                        chai.request('http://localhost:3000')
                        .get('/task/tasks')
                        .set('Authorization', token)
                        .end((err, res)=>{
                            res.should.have.status(200);
                           res.body.should.be.a('array');
                            done();
                          });
                    });
                }); 
             
                done();
            });
    });
});


//update task --test case 3----
describe('/login', () => {
    it('Login a user', (done) => {
        let user = {
            username: "thili",
            password: "thili",
        }
        chai.request('http://localhost:3000')
            .post('/user/login')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.body).to.have.property('token');
                let token = "Bearer " + res.body.token;
                describe('Task',()=>{
                    it('should update a task on /Task PUT',(done)=>{
                        chai.request('http://localhost:3000')
                        .put('/task/task/'+"5b279021fdd52a2c106c6e39")
                        .set('Authorization', token)
                        .send({description:'updatetest'})
                        .end(function(err, res)
                        {
                          res.should.have.status(200);
                          done();
                        });
                    })
                })
                
             
                done();
            });
    });
});



////test delete SINGLE task --test case 4----
describe('/login', () => {
    it('Login a user', (done) => {
        let user = {
            username: "thili",
            password: "thili",
        }
        chai.request('http://localhost:3000')
            .post('/user/login')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.body).to.have.property('token');
                let token = "Bearer " + res.body.token;
                describe('Task',()=>{
                    it('should delete a Task on / Task',(done)=>{
                        chai.request('http://localhost:3000')
                        .delete('/task/task/'+"5b279021fdd52a2c106c6e39")
                        .set('Authorization', token)
                        .end(function(err,res){
                            res.should.have.status(200);
                            done();
                        });
                    })
                });
                
             
                done();
            });
    });
});

//test search SINGLE project --test case 5----
describe('/login', () => {
    it('Login a user', (done) => {
        let user = {
            username: "thili",
            password: "thili",
        }
        chai.request('http://localhost:3000')
            .post('/user/login')
            .send(user)
            .end((err, res) => {
                res.should.have.status(200);
                expect(res.body).to.have.property('token');
                let token = "Bearer " + res.body.token;
                describe('Project', () => {
                    it('should list SINGLE task on /:taskname GET',(done) => {
                        chai.request('http://localhost:3000')
                        .get('/task/task/search/:taskname'+"task11")
                        .set('Authorization', token)
                        .end((err, res)=>{
                            res.should.have.status(200);
                            done();
                          });
                    });
                });
             
                done();
            });
    });
});
