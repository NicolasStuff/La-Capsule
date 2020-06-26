export default function(picture = [], action) {
    if(action.type == 'savePicture') {
        var NewPicture = [...picture, action.picture];
        console.log("REDUCEUR",NewPicture)
        return NewPicture;
    } else {
        return picture;
    }
}