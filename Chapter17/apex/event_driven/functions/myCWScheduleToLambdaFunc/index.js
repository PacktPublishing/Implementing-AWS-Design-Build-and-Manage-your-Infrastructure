console.log('Loading function');
exports.handler = function(event, context, callback) {
	var csvExport = require('dynamodbexportcsv');
	var exporter = new csvExport(null, null, 'us-east-1');

	exporter.exportTable('LambdaExportToS3', ['userName'], 1, true, 250, 'dynamodb-backup-s3', '04-17-2017', function(err) {
		if(err){
			console.log("An error occurred while exporting the table to s3. The error is: "+err);
			return callback(err);
		}
	  console.log("Succesfully exported the table to S3!");
	  callback(null, "success");
	});
};


