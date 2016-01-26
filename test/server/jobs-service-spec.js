var express = require('express');
var app = express();
var expect = require('chai').expect;
var request = require('supertest');

var dataSavedJob;
var db = {
  saveJob: function(job){
    dataSavedJob = job;
  },
  getJobs: function (){
    return [];
  }
};
var jobService = require('../../jobs-service')(db, app);

describe('save jobs', function (){
  it('should validate that title is greater than 4 chars')
  it('should validate that title is less than 40 chars')
  it('should validate that title is greater than 4 chars')
  it('should validate that title is less than 250 chars')

  var newJob = {title:'job1', description: 'desc job 1'};

  it('should pass the job to the database', function (done){
    request(app).post('/api/jobs').send(newJob).end(function (err, res){
      expect(dataSavedJob).to.deep.equal(newJob);
      done();
    });
  });
  it('should return a status of 200 to the frontend')
  it('should return a job with an id')
  it('should return an error if the database failed')
})

describe('get jobs', function(){
  it('should get always an array', function (done){
    request(app).get('/api/jobs').end(function (err, res){
      expect(res.body).to.be.a('array');
      done();
    });
  });
  it('should return a status of 200 to the frontend', function (done){
    request(app).get('/api/jobs').end(function (err, res){
      expect(res.status).to.equal(200);
      done();
    });
  });

});
