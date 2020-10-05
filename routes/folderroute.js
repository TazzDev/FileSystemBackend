const express = require('express');

const router = express.Router();

const {createNewFolder, deleteFolder, moveFolder, getFolders} = require('../controllers/foldercontroller');

router.get('/folder/all',getFolders);
router.post('/folder/createfolder',createNewFolder);
router.post('/folder/movefolder',moveFolder)
router.delete('/folder/deletefolder',deleteFolder);

module.exports = router;
