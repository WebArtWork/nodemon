module.exports = function(sd, argv, root){
	require('nodemon')({
		script: root+'/parts',
		ext: 'js json',
		watch: [process.cwd()+'/server', process.cwd()+'/runners']
	});
}