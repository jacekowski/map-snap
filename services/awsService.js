const aws = require('aws-sdk');
const awsBucket = process.env.AWS_BUCKET;

let s3 = new aws.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_S3_SECRET_ACCESS_KEY
});

module.exports = {
  upload: (image, storyID) => {
    var photoKey = 'map-photos/' + 'story_' + storyID + '/story_map.png';
    console.log("uploading image");
    s3.upload({
      Bucket: awsBucket,
      Key: photoKey,
      Body: image,
      ACL: 'public-read',
      ContentType: 'image/jpeg'
    }, function(err, data) {
      if (err) {
        console.log('There was an error uploading your photo: ', err.message);
      }
    });
  }
}
