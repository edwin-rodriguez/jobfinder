var expect = require('chai').expect;

describe('get jobs', function(){
  it('should never be empty', function (){
    jobsList = [];
    expect(jobsList.length).to.be.at.least(1);
  });
});
