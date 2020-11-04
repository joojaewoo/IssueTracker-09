// Dependencies
const express = require('express');

// Controller
const issueController = require('../controller/issue');

const router = express.Router();

router.get('/', issueController.read);

router.post('/', issueController.create);

router.put('/title/:id', issueController.updateTitle);

router.put('/milestone/:id', issueController.updateMilestone);

router.put('/state/:id', issueController.updateState);

router.put('/assignee/:id', issueController.updateAssignee);

router.put('/assignees/:id', issueController.updateAssignees);

router.put('/label/:id', issueController.updateLabel);

router.put('/labels/:id', issueController.updateLabels);

router.delete('/:id', issueController.remove);

module.exports = router;
