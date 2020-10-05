const Folder = require('../models/foldermodel');

exports.getFolders = async (req,res) => {
    try {
        Folder.find({}).exec((err,folderdetails)=> {
            if(err) {
                res.status(400).json({err})
            }
            res.status(200).json({folderdetails})
        })
    }
    catch(err) {
        console.log(err.message)
    }
}

exports.createNewFolder = async (req,res) => {
    try {
        const folder = await new Folder(req.body);
        console.log(req.body);

        await folder.save((err,folderdetails)=> {
            if(err) {
                return res.status(400).json({err})
            }
            res.status(200).json({folderdetails});
        });
    }
    catch(err) {
        console.log(err.message)
    }
}

exports.deleteFolder = async (req,res) => {

    Folder.deleteMany({"parentname": req.query.name}, function (err,folderdetails) {
        if(err) {
            console.log(err)
        } else {
        console.log('subfolder deletion success',folderdetails)
        }
    });

    Folder.deleteOne({"foldername": req.query.name}, function (err,folderdetails) {
        if(err) {
            res.status(400).json({err})
        }
        res.status(200).json({folderdetails});
    })

}

exports.moveFolder = async (req,res) => {

    Folder.findOneAndUpdate({"foldername": req.body.foldername},{"parentname" : req.body.parentname}, function (err,folderdetails) {
        if (err) {
            res.status(400).json({err})
        }
        res.status(200).json({folderdetails});
    }) 
}