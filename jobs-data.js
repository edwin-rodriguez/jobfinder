var JOB_LIST = [
  {title:'job1', description: 'desc job 1'},
  {title:'job2', description: 'desc job 2'},
  {title:'job3', description: 'desc job 3'},
  {title:'job4', description: 'desc job 4'},
];

exports.saveJob = function (job) {
  JOB_LIST.push(job);
}

exports.getJobs = function (){
  return JOB_LIST;
}
