const Plan = require("../model/plans.model")

// creates a new entry
module.exports.createEntry = (req, res) => {
  const { name, sqft, price, garage, beds, baths, chimney, stories, layout, img1, img2, img3, img4, img5 } = req.body;
  Plan.create({
    name,
    sqft,
    price,
    garage,
    beds,
    baths,
    chimney,
    stories,
    layout,
    img1,
    img2,
    img3,
    img4,
    img5
  })
      .then(entry => res.json(entry))
      .catch(err => res.status(400).json(err));
}

//shows all entrys on the page
module.exports.getAllEntries = (req, res) => {
  Plan.find({})
      .then(entries => res.json(entries))
      .catch(err => res.json(err))
}

//shows details of a entry
module.exports.getEntry = (req, res) => {
  Plan.findOne({_id:req.params.id})
        .then(entry => res.json(entry))
        .catch(err => res.json(err))
}

//updates a entry
module.exports.updateEntry = (req, res) => {
  Plan.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
        .then(updatedEntry => res.json(updatedEntry))
        .catch(err => res.json(err))
}

//deletes a entry
module.exports.deleteEntry = (req, res) => {
  Plan.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.json(err))
}