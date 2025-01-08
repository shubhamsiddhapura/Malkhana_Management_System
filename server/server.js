const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://yakshmahawer:mainhijeetunga@malkhana.tn8mvfk.mongodb.net/?retryWrites=true&w=majority", {
     useNewUrlParser: true,
     useUnifiedTopology: true
}).then(() => {
    console.log("Connected to Database");
}).catch((e) => {
    console.log(e);
});

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    }
});

const User = new mongoose.model('User',userSchema);

const storageSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    a1: {
        type: [],
        required: true
    },
    a2: {
        type: [],
        required: true
    },
    a3: {
        type: [],
        required: true
    },
    a4: {
        type: [],
        required: true
    },
    a5: {
        type: [],
        required: true
    },
    a6: {
        type: [],
        required: true
    },
    a7: {
        type: [],
        required: true
    },
    a8: {
        type: [],
        required: true
    },
    a9: {
        type: [],
        required: true
    },
    b1: {
        type: [],
        required: true
    },
    b2: {
        type: [],
        required: true
    },
    b3: {
        type: [],
        required: true
    },
    c1: {
        type: [],
        required: true
    },
    c2: {
        type: [],
        required: true
    },
    d1: {
        type: [],
        required: true
    },
    d2: {
        type: [],
        required: true
    },
    d3: {
        type: [],
        required: true
    },
    d4: {
        type: [],
        required: true
    },
    d5: {
        type: [],
        required: true
    },
    d6: {
        type: [],
        required: true
    },
    d7: {
        type: [],
        required: true
    },
    d8: {
        type: [],
        required: true
    },
    d9: {
        type: [],
        required: true
    },
    d10: {
        type: [],
        required: true
    },
    d11: {
        type: [],
        required: true
    },
    d12: {
        type: [],
        required: true
    },
    d13: {
        type: [],
        required: true
    },
    d14: {
        type: [],
        required: true
    },
    d15: {
        type: [],
        required: true
    },
    e1: {
        type: [],
        required: true
    },
    e2: {
        type: [],
        required: true
    },
    e3: {
        type: [],
        required: true
    },
    e4: {
        type: [],
        required: true
    },
    e5: {
        type: [],
        required: true
    },
    e6: {
        type: [],
        required: true
    },
    e7: {
        type: [],
        required: true
    },
    e8: {
        type: [],
        required: true
    },
    e9: {
        type: [],
        required: true
    },
    e10: {
        type: [],
        required: true
    },
    f1: {
        type: [],
        required: true
    },
    f2: {
        type: [],
        required: true
    },
    f3: {
        type: [],
        required: true
    },
    f4: {
        type: [],
        required: true
    },
    f5: {
        type: [],
        required: true
    },
    f6: {
        type: [],
        required: true
    },
    g1: {
        type: [],
        required: true
    }
    
});
const Storage = new mongoose.model('Storage',storageSchema);

const itemSchema = new mongoose.Schema({
    case_id: {
        type: String,
        required: true
    },
    barcode_id: {
        type: Number,
        //required: true
    },
    stored_comp: {
        type: String
    },
    vehicle_number: {
        type: String
    },
    type: {
        type: String,
        required: true
    },
    storage_type: {
        type: String
    },
    depositor_id: {
        type: String,
        required: true
    },
    depositor_name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    malkhana_name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "in"
    },
    removed_at: {
        type: Date,
    },
    reciever_id: {
        type: String,
    },
    reciever_name: {
        type: String,
    },
    deleted: {
        type: Boolean,
        default: false
    }
});

const Item = new mongoose.model('Item',itemSchema);

const visitorSchema = new mongoose.Schema({
    visitor_id: {
        type: Number,
        required: true
    },
    visitor_name: {
        type: String,
        required: true
    },
    malkhana_name: {
        type: String,
        required: true
    },
    created_at: {
        type: Date,
        default: Date.now()
    },
    removed_at: {
        type: Date
    },
    inside: {
        type: Boolean,
        default: true
    },
    time: {
        type: Number
    }
});

const Visitor = new mongoose.model('Visitor',visitorSchema);

const vehicleSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    x1:{
        type: Boolean
    },
    x2:{
        type: Boolean
    },
    x3:{
        type: Boolean
    },
    x4:{
        type: Boolean
    },
    x5:{
        type: Boolean
    },
    x6:{
        type: Boolean
    },
    x7:{
        type: Boolean
    },
    x8:{
        type: Boolean
    },
    x9:{
        type: Boolean
    },
    x10:{
        type: Boolean
    },
    y1:{
        type: Boolean
    },
    y2:{
        type: Boolean
    },
    y3:{
        type: Boolean
    },
    y4:{
        type: Boolean
    },
    z1:{
        type: Boolean
    },
    z2:{
        type: Boolean
    },
    z2:{
        type: Boolean
    }
});

const Vehicle = new mongoose.model('Vehicle', vehicleSchema);

const notificationScheme = new mongoose.Schema({
    message:{
        type: String,
        required: true
    },
    created_at:{
        type: Date,
        default: Date.now()
    },
    all:{
        type: Boolean,
        default: false
    },
    head:{
        type: Boolean,
        default: false
    },
    manjalpur:{
        type: Boolean,
        default: false
    },
    gotri:{
        type: Boolean,
        default: false
    },
    jp:{
        type: Boolean,
        default: false
    },
    sayaji:{
        type: Boolean,
        default: false
    },
    rao:{
        type: Boolean,
        default: false
    },
});

const Notification = new mongoose.model("Notification", notificationScheme);

const auditSchema = new mongoose.Schema({
    name: {
        type: String
    },
    result: {
        type: String
    },
    missing: {
        type: Number
    },
    status: {
        type: String
    }

});

const Audit = new mongoose.model("Audit", auditSchema);

app.post("/login", async (req, res) => {
    try{
        const userData = await User.findOne({username: req.body.username});
        if(userData === null){
            res.json({mes: "No Such User Exist"});
        }
        else{
            if(req.body.password === userData.password){
                res.json({mes: "Correct", name: userData.name});
            }
            else{
                res.json({mes: "Wrong Username Password"})
            }
        }
    }
    catch(err){
        console.log(err);
    }
});
    
const types = ['box_1', 'box_2', 'box_3', 'box_4', 'box_5', 's_bag', 'm_bag', 'l_bag'];
const type_volume = [0.4032, 3.2256, 10.8864, 25.8048, 50.4, 0.1, 0.2, 0.3];
const box_arr = ["a1", "a2", "a3", "a4", "a5", "a6","b1", "b2", "d1", "d2", "d3", "d4","d5", "d6","d7", "d8","d9", "d10","d11", "d12","d13", "d14", "d15", "f1", "f2", "f3", "f4", "f5", "f6", "c1", "c2", "g1"];
const vault_arr = ["e1", "e2","e3", "e4","e5", "e6","e7", "e8","e9", "e10"];
app.post("/additem", async (req,res) =>  {
    try{
        const data = await Storage.findOne({name: req.body.ps});
        var item_volume;
        var item_place = null;
        console.log(req.body);
        if(req.body.box == 'new'){
            item_volume = (req.body.len*req.body.wid*req.body.hei)/1000;
        }
        else{
            let index = types.indexOf(req.body.box);
            item_volume = type_volume[index];
            console.log(index);
        }
        console.log(item_volume);
        if(req.body.cat !== 'ornament'){
            var i_min = 0;
            var i_max = box_arr.length;
            var flag = false;
            while((i_min < i_max) && (!flag)){
                let comp_arr = data[box_arr[i_min]];
                if(comp_arr[1] >= item_volume){
                    flag = true;
                    item_place = box_arr[i_min];
                    var str = box_arr[i_min];
                    const updateObject = {};
                    updateObject[`${str}`] = [(comp_arr[0] + 1), (comp_arr[1] - item_volume), "empty"];
                    const comp = await Storage.findOneAndUpdate({name: req.body.ps}, { $set: updateObject });
                }
                i_min++;
            }
        }
        else{
            var i = 0;
            var flag = false;
            while(i < vault_arr.length && (!flag)){
                let comp_arr = data[vault_arr[i_min]];
                if(comp_arr[1] >= item_volume){
                    flag = true;
                    item_place = vault_arr[i];
                    var str = vault_arr[i];
                    const updateObject = {};
                    updateObject[`${str}`] = [(comp_arr[0] + 1), (comp_arr[1] - item_volume), "empty"];
                    const comp = await Storage.findOneAndUpdate({name: req.body.ps}, { $set: updateObject });
                }
                i++;
            }
        }

        const last_item = await Item.aggregate([
            {
              $sort: { barcode_id: -1 }
            },
            {
              $limit: 1
            }
          ]);
        
        var new_barcode = 0;
        console.log(last_item.length);
        if(last_item.length === 0){
            new_barcode = 19019020
        }
        else{
            new_barcode = last_item[0].barcode_id + 1;
        }


        if(item_place == null){
            res.json("No Space Left");
        }
        else{
            let item_data = new Item({
                case_id: req.body.caseId,
                barcode_id: new_barcode,
                type: req.body.cat,
                stored_comp: item_place,
                storage_type: req.body.box,
                depositor_id: req.body.depId,
                depositor_name: req.body.depName,
                malkhana_name: req.body.ps
            });
            item_data.save();
    
    
            res.json({mes: "New Item Created", loc: item_place, bar: new_barcode});
        }
    }
    catch(err){
        console.log(err);
    }
});

const type_scooty = ["x1","x2","x3","x4","x5","x6","x7","x8","x9","x10"];
const type_car = ["y1","y2","y3","y4"];
const type_truck = ["z1", "z2", "z3"];
app.post("/addvehicle", async (req, res) => {
    try{
        const data = await Vehicle.findOne({name: req.body.ps});
        var item_place = null;
        if(req.body.vType === 'scooty'){
            var i = 0;
            var flag = false;
            while(i < type_scooty.length && (!flag)){
                if(!(data[type_scooty[i]])){
                    flag = true;
                    item_place = type_scooty[i];
                    var str = type_scooty[i];
                    const updateObject = {};
                    updateObject[`${str}`] = true;
                    const comp = await Vehicle.findOneAndUpdate({name: req.body.ps}, { $set: updateObject });
                }
                i++;
            }
        }
        else if(req.body.vType === 'car'){
            var i = 0;
            var flag = false;
            while(i < type_car.length && (!flag)){
                if(!(data[type_car[i]])){
                    flag = true;
                    item_place = type_car[i];
                    var str = type_car[i];
                    const updateObject = {};
                    updateObject[`${str}`] = true;
                    const comp = await Vehicle.findOneAndUpdate({name: req.body.ps}, { $set: updateObject });
                }
                i++;
            }
        }
        else{
            var i = 0;
            var flag = false;
            while(i < type_truck.length && (!flag)){
                if(!(data[type_truck[i]])){
                    flag = true;
                    item_place = type_truck[i];
                    var str = type_truck[i];
                    const updateObject = {};
                    updateObject[`${str}`] = true;
                    const comp = await Vehicle.findOneAndUpdate({name: req.body.ps}, { $set: updateObject });
                }
                i++;
            }
        }

        const last_item = await Item.aggregate([
            {
              $sort: { barcode_id: -1 }
            },
            {
              $limit: 1
            }
          ]);

          var new_barcode = 0;
          if(last_item.length === 0){
              new_barcode = 19019020
          }
          else{
              new_barcode = last_item[0].barcode_id + 1;
          }

        if(item_place === null){
            res.json("No Space Left");
        }
        else{
            let item_data = new Item({
                case_id: req.body.caseId,
                vehicle_number: req.body.VId,
                barcode_id: new_barcode,
                type: req.body.vType,
                stored_comp: item_place,
                depositor_id: req.body.depId,
                depositor_name: req.body.depName,
                malkhana_name: req.body.ps
            });
            item_data.save();

            res.json({mes: "New Item Created", loc: item_place, bar: new_barcode});
        }
    }
    catch(err){
        console.log(err);
    }
})

app.post("/findByBar", async (req, res) => {
    try{
        const data = await Item.findOne({barcode_id: req.body.barId, deleted: false});
        res.json(data);
    }
    catch(err){
        console.log(err);
    }
});

app.post("/sendItemToFSL", async (req, res) => {
    try{
        const data = await Item.findOneAndUpdate({barcode_id: req.body.barId}, {$set: {removed_at: Date.now(), status: "Item At FSL"}});
        res.json("Updated");
    }
    catch(err){
        console.log(err);
    }
});

app.post("/removeItem", async (req, res) => {
    try {
        const data = await Item.findOneAndUpdate(
            { barcode_id: req.body.barId },  // Find item by barcode ID
            {
                $set: {
                    removed_at: Date.now(),   // Set the time of removal
                    status: "Removed",        // Update the status to "Removed"
                    deleted: true             // Mark the item as "deleted" (soft delete)
                }
            },
            { new: true }  // Return the updated document after modification
        );

        if (!data) {
            return res.status(404).json({ message: "Item not found" });  // Handle case when item is not found
        }

        res.json({
            message: "Item successfully marked as removed",
            item: data   // Send the updated item back in the response
        });
    } catch (err) {
        console.error("Error while marking item as removed:", err);
        res.status(500).json({ message: "Internal server error" });
    }
});


app.get('/getAllBarcodes', async (req, res) => {
    try {
        // Fetch all items and select barcode_id, case_id, and item_type fields
        const items = await Item.find({}, 'barcode_id case_id type'); // Specify the fields to retrieve
        // Map items to include barcode_id, case_id, and item_type
        const barcodes = items.map(item => ({
            barcode_id: item.barcode_id,
            case_id: item.case_id,
            item_type: item.type
        }));
        res.json(barcodes);
    } catch (err) {
        console.error(err); // Improved error logging
        res.status(500).send('Server error');
    }
});



app.post("/findToday", async (req, res) => {
    try{
        const data = await Item.find({created_at: {
            $gte: new Date(new Date().setHours(0, 0, 0, 0)),
            $lt: new Date(new Date().setHours(23, 59, 59, 999))
          }, malkhana_name: req.body.ps});
        res.json(data);
    }
    catch(err){
        console.log(err);
    }
});


app.post("/findAll", async (req, res) => {
    try{
        const data = await Item.find({malkhana_name: req.body.ps});
        res.json(data);
    }
    catch(err){
        console.log(err);
    }
});

app.post("/sfindToday", async (req, res) => {
    try{
        const data = await Item.find({created_at: {
            $gte: new Date(new Date().setHours(0, 0, 0, 0)),
            $lt: new Date(new Date().setHours(23, 59, 59, 999))
          }});
        res.json(data);
    }
    catch(err){
        console.log(err);
    }
});

app.post("/sfindAll", async (req, res) => {
    try{
        const data = await Item.find();
        res.json(data);
    }
    catch(err){
        console.log(err);
    }
});

app.post("/createVisitor", async (req, res) => {
    try{
        let new_visitor = new Visitor({
            visitor_id: req.body.v_id,
            visitor_name: req.body.v_name,
            malkhana_name: req.body.malkhana_name
        });
        new_visitor.save();
        res.json("New Visitor Created");
    }
    catch(err){
        console.log(err);
    }
});

app.post("/removeVisitor", async (req, res) => {
    const data = await Visitor.findOneAndUpdate({malkhana_name: req.body.malkhana_name, visitor_id: req.body.visitor_id, inside: true}, {$set: {inside: false}});
    console.log(data);
    const new_data = await  Visitor.find({malkhana_name: req.body.malkhana_name, inside: true});
    res.json(new_data);
})
app.post("/todayVisitor", async (req, res) => {
    try{
        const data = await Visitor.find({created_at: {
            $gte: new Date(new Date().setHours(0, 0, 0, 0)),
            $lt: new Date(new Date().setHours(23, 59, 59, 999))
          }, malkhana_name: req.body.malkhana_name });
        res.json(data);
    }
    catch(err){
        console.log(err);
    }
});

app.post("/printData", async (req, res) => {
    const data = await Item.find({malkhana_name: req.body.ps, deleted: false}).select({case_id: 1, stored_comp: 1, type: 1, storage_type: 1});
    res.json(data);
});

app.post("/dateVisitor", async (req, res) => {
    try{
        var dateArr = req.body.date.split("-");
        var year = Number(dateArr[0]);
        var month = Number(dateArr[1]);
        var day = Number(dateArr[2]);
        const startDate = new Date(year, month-1, day);
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(year, month-1, day);
        endDate.setHours(23, 59, 59, 999);
        let data = await Visitor.find({created_at: {
            $gte: startDate,
            $lt: endDate
          }, malkhana_name: req.body.malkhana_name});
        res.json(data);
    }
    catch(err){
        console.log(err);
    }
});

app.post("/allVisitor", async (req, res) => {
    try{
        const data = await Visitor.find({malkhana_name: req.body.malkhana_name});
        res.json(data);
    }
    catch(err){
        console.log(err);
    }
});

app.post("/nowVisitor", async (req, res) => {
    try{
        const data = await Visitor.find({malkhana_name: req.body.malkhana_name, inside: true});
        res.json(data);
    }
    catch(err){
        console.log(err);
    }
});


app.post("/todaysVisitor", async (req, res) => {
    try{
        const data = await Visitor.find({created_at: {
            $gte: new Date(new Date().setHours(0, 0, 0, 0)),
            $lt: new Date(new Date().setHours(23, 59, 59, 999))
          }});
        res.json(data);
    }
    catch(err){
        console.log(err);
    }
});

app.post("/datesVisitor", async (req, res) => {
    try{
        var dateArr = req.body.date.split("-");
        var year = Number(dateArr[0]);
        var month = Number(dateArr[1]);
        var day = Number(dateArr[2]);
        const startDate = new Date(year, month-1, day);
        startDate.setHours(0, 0, 0, 0);
        const endDate = new Date(year, month-1, day);
        endDate.setHours(23, 59, 59, 999);
        let data = await Visitor.find({created_at: {
            $gte: startDate,
            $lt: endDate
          }});
        res.json(data);
    }
    catch(err){
        console.log(err);
    }
});

app.post("/allsVisitor", async (req, res) => {
    try{
        const data = await Visitor.find({});
        res.json(data);
    }
    catch(err){
        console.log(err);
    }
});

app.post("/nowsVisitor", async (req, res) => {
    try{
        const data = await Visitor.find({ inside: true});
        res.json(data);
    }
    catch(err){
        console.log(err);
    }
});


app.post("/search", async (req, res) => {
    try{
        const data = await Item.find({malkhana_name: req.body.ps, barcode_id: req.body.searchId});
        res.json(data);
    }
    catch(err){
        console.log(err);
    }
});

app.post("/ssearch", async (req, res) => {
    try{
        const data = await Item.find({barcode_id: req.body.searchId});
        res.json(data);
    }
    catch(err){
        console.log(err);
    }
});

app.post("/filter", async (req, res) => {
    try{
        if(req.body.date === 'any'){
            if(req.body.category === 'all'){
                if(req.body.status === 'any'){
                    let data = await Item.find({malkhana_name: req.body.ps});
                    res.json(data);
                }
                else{
                    let data = await Item.find({malkhana_name: req.body.ps, status: req.body.status});
                    res.json(data);
                }
            }
            else{
                if(req.body.status === 'any'){
                    let data = await Item.find({malkhana_name: req.body.ps, type: req.body.category});
                    res.json(data);
                }
                else{
                    let data = await Item.find({malkhana_name: req.body.ps, type: req.body.category, status: req.body.status});
                    res.json(data);
                }
            }
        }
        else if(req.body.date === 'one'){
            var dateArr = req.body.oneDate.split("-");
            var year = Number(dateArr[0]);
            var month = Number(dateArr[1]);
            var day = Number(dateArr[2]);
            const startDate = new Date(year, month-1, day);
            startDate.setHours(0, 0, 0, 0);
            const endDate = new Date(year, month-1, day);
            endDate.setHours(23, 59, 59, 999);

            if(req.body.category === 'all'){
                if(req.body.status === 'any'){
                    let data = await Item.find({created_at: {
                        $gte: startDate,
                        $lt: endDate
                      }, malkhana_name: req.body.ps});
                    res.json(data);
                }
                else{
                    let data = await Item.find({created_at: {
                        $gte: startDate,
                        $lt: endDate
                      }, malkhana_name: req.body.ps, status: req.body.status});
                    res.json(data);
                }
            }
            else{
                if(req.body.status === 'any'){
                    let data = await Item.find({created_at: {
                        $gte: startDate,
                        $lt: endDate
                      }, malkhana_name: req.body.ps, type: req.body.category});
                    res.json(data);
                }
                else{
                    let data = await Item.find({created_at: {
                        $gte: startDate,
                        $lt: endDate
                      },malkhana_name: req.body.ps, type: req.body.category, status: req.body.status});
                    res.json(data);
                }
            }
        }
        else{
            var dateArr1 = req.body.fromDate.split("-");
            var dateArr2 = req.body.toDate.split("-");
            var year1 = Number(dateArr1[0]);
            var month1 = Number(dateArr1[1]);
            var day1 = Number(dateArr1[2]);
            var year2 = Number(dateArr2[0]);
            var month2 = Number(dateArr2[1]);
            var day2 = Number(dateArr2[2]);
            const startDate = new Date(year1, month1-1, day1);
            startDate.setHours(0, 0, 0, 0);
            const endDate = new Date(year2, month2-1, day2);
            endDate.setHours(23, 59, 59, 999);

            if(req.body.category === 'all'){
                if(req.body.status === 'any'){
                    let data = await Item.find({created_at: {
                        $gte: startDate,
                        $lt: endDate
                      }, malkhana_name: req.body.ps});
                    res.json(data);
                }
                else{
                    let data = await Item.find({created_at: {
                        $gte: startDate,
                        $lt: endDate
                      }, malkhana_name: req.body.ps, status: req.body.status});
                    res.json(data);
                }
            }
            else{
                if(req.body.status === 'any'){
                    let data = await Item.find({created_at: {
                        $gte: startDate,
                        $lt: endDate
                      }, malkhana_name: req.body.ps, type: req.body.category});
                    res.json(data);
                }
                else{
                    let data = await Item.find({created_at: {
                        $gte: startDate,
                        $lt: endDate
                      },malkhana_name: req.body.ps, type: req.body.category, status: req.body.status});
                    res.json(data);
                }
            }
        }
    }
    catch(err){
        console.log(err);
    }
});


app.post("/sfilter", async (req, res) => {
    try{
        if(req.body.date === 'any'){
            if(req.body.category === 'all'){
                if(req.body.status === 'any'){
                    let data = await Item.find();
                    res.json(data);
                }
                else{
                    let data = await Item.find({status: req.body.status});
                    res.json(data);
                }
            }
            else{
                if(req.body.status === 'any'){
                    let data = await Item.find({type: req.body.category});
                    res.json(data);
                }
                else{
                    let data = await Item.find({type: req.body.category, status: req.body.status});
                    res.json(data);
                }
            }
        }
        else if(req.body.date === 'one'){
            var dateArr = req.body.oneDate.split("-");
            var year = Number(dateArr[0]);
            var month = Number(dateArr[1]);
            var day = Number(dateArr[2]);
            const startDate = new Date(year, month-1, day);
            startDate.setHours(0, 0, 0, 0);
            const endDate = new Date(year, month-1, day);
            endDate.setHours(23, 59, 59, 999);

            if(req.body.category === 'all'){
                if(req.body.status === 'any'){
                    let data = await Item.find({created_at: {
                        $gte: startDate,
                        $lt: endDate
                      }});
                    res.json(data);
                }
                else{
                    let data = await Item.find({created_at: {
                        $gte: startDate,
                        $lt: endDate
                      }, status: req.body.status});
                    res.json(data);
                }
            }
            else{
                if(req.body.status === 'any'){
                    let data = await Item.find({created_at: {
                        $gte: startDate,
                        $lt: endDate
                      }, type: req.body.category});
                    res.json(data);
                }
                else{
                    let data = await Item.find({created_at: {
                        $gte: startDate,
                        $lt: endDate
                      }, type: req.body.category, status: req.body.status});
                    res.json(data);
                }
            }
        }
        else{
            var dateArr1 = req.body.fromDate.split("-");
            var dateArr2 = req.body.toDate.split("-");
            var year1 = Number(dateArr1[0]);
            var month1 = Number(dateArr1[1]);
            var day1 = Number(dateArr1[2]);
            var year2 = Number(dateArr2[0]);
            var month2 = Number(dateArr2[1]);
            var day2 = Number(dateArr2[2]);
            const startDate = new Date(year1, month1-1, day1);
            startDate.setHours(0, 0, 0, 0);
            const endDate = new Date(year2, month2-1, day2);
            endDate.setHours(23, 59, 59, 999);

            if(req.body.category === 'all'){
                if(req.body.status === 'any'){
                    let data = await Item.find({created_at: {
                        $gte: startDate,
                        $lt: endDate
                      }});
                    res.json(data);
                }
                else{
                    let data = await Item.find({created_at: {
                        $gte: startDate,
                        $lt: endDate
                      }, status: req.body.status});
                    res.json(data);
                }
            }
            else{
                if(req.body.status === 'any'){
                    let data = await Item.find({created_at: {
                        $gte: startDate,
                        $lt: endDate
                      }, type: req.body.category});
                    res.json(data);
                }
                else{
                    let data = await Item.find({created_at: {
                        $gte: startDate,
                        $lt: endDate
                      }, type: req.body.category, status: req.body.status});
                    res.json(data);
                }
            }
        }
    }
    catch(err){
        console.log(err);
    }
});


app.post("/addmessage", async (req, res) => {
    try{
        let message = new Notification({
            message: req.body.mes,
            all: req.body.all,
            manjalpur: req.body.a1,
            gotri: req.body.a5,
            jp: req.body.a2,
            sayaji: req.body.a3,
            rao: req.body.a4,
        });
        message.save();
        res.json("Message Sent");
    }
    catch(err){
        console.log(err);
    }
});

app.post("/viewnotifications", async (req, res) => {
    var data;
    var final_data;
    if(req.body.ps == "Manjalpur"){
        data = await Notification.find({manjalpur: true});
    }
    else if(req.body.ps == "JP Road"){
        data = await Notification.find({jp: true});
    }
    else if(req.body.ps == "Gotri"){
        data = await Notification.find({gotri: true});
    }
    else if(req.body.ps == "Sayajiganj"){
        data = await Notification.find({sayaji: true});
    }
    else if(req.body.ps == "Raopura"){
        data = await Notification.find({rao: true});
    }
    else{
        data = await Notification.find({head: true});
    }

    if(req.body.ps !== "Police Headquater"){
        var all_data = await Notification.find({all: true});
        final_data = data.concat(all_data);
    }
    else{
        final_data = data;
    }

    res.json(final_data);

});

app.post("/getStats", async (req, res) => {
    if(req.body.ps !== "Police Headquater"){
        const storageData = await Storage.findOne({name: req.body.ps});
        const parkingData = await Vehicle.findOne({name: req.body.ps});
        var key_arr = Object.keys(storageData.toObject());
        let i = 2;
        var count = 0;
        var total = 0;
        var og = 5212.800000000004;
        while(i < key_arr.length){
            count += storageData[key_arr[i]][0];
            total += storageData[key_arr[i]][1];
            i++;
        }

        var vkey_arr = Object.keys(parkingData.toObject());
        let j = 2;
        var v_count = 0;
        var v_og = 17;
        var c_scooty = 0;
        var c_car = 0;
        var c_truck = 0;
        while(j < vkey_arr.length){
            if(parkingData[vkey_arr[j]]){
                v_count += 1;
            }
            if(vkey_arr[j][0] == 'x'){
                if(parkingData[vkey_arr[j]]){
                    c_scooty += 1;
                }
            }
            if(vkey_arr[j][0] == 'y'){
                if(parkingData[vkey_arr[j]]){
                    c_car += 1;
                }
            }
            if(vkey_arr[j][0] == 'z'){
                if(parkingData[vkey_arr[j]]){
                    c_truck += 1;
                }
            }
            j++;
        }

        const cat1_data = await Item.find({malkhana_name: req.body.ps, type: "drugs"});
        const cat2_data = await Item.find({malkhana_name: req.body.ps, type: "weapon"});
        const cat3_data = await Item.find({malkhana_name: req.body.ps, type: "liquid"});
        const cat4_data = await Item.find({malkhana_name: req.body.ps, type: "document"});
        const cat5_data = await Item.find({malkhana_name: req.body.ps, type: "ornament"});

        var cat_count_arr = [cat1_data.length,cat2_data.length,cat3_data.length,cat4_data.length,cat5_data.length];
        var cat_arr = ["drugs", "weapon", "liquid", "document", "ornament"];
        var max = Math.max(...cat_count_arr);
        var max_index = cat_count_arr.indexOf(max);
        res.json({
            item_count: count,
            storage_full: (100 - (total/og)*100),
            storage_empty: ((total/og)*100),
            vehicle_count: v_count,
            parking_full: ((v_count/v_og)*100),
            parking_empty: (100 - (v_count/v_og)*100),
            car_count: c_car,
            scooty_count: c_scooty,
            truck_count: c_truck,
            top_category: cat_arr[max_index]
        });

    }
    else{
        const allItems = await Item.find({});
        var totalItemCount = 0;
        var totalVehicleCount = 0;
        var i = 0;
        while(i < allItems.length){
            if(allItems[i].type === 'car' || allItems[i].type === 'scooty' || allItems[i].type === 'truck'){
                totalVehicleCount += 1;
            }
            else{
                totalItemCount+=1;
            }
            i++;
        }

        const allManjalpurItems = await Item.find({malkhana_name: "Manjalpur"});
        const allJPItems = await Item.find({malkhana_name: "JP Road"});
        const allSayajiganjItems = await Item.find({malkhana_name: "Sayajiganj"});
        const allGotriItems = await Item.find({malkhana_name: "Gotri"});
        const allRaopuraItems = await Item.find({malkhana_name: "Raopura"});

        function countItemVehicle(list){
            var itemCount = 0;
            var vehicleCount = 0;
            var i = 0;
            while(i < list.length){
                if(list[i].type === 'car' || list[i].type === 'scooty' || list[i].type === 'truck'){
                    vehicleCount += 1;
                }
                else{
                    itemCount+=1;
                }
                i++;
            }
            return [itemCount, vehicleCount];
        }

        const cat1_data = await Item.find({ type: "drugs"});
        const cat2_data = await Item.find({ type: "weapon"});
        const cat3_data = await Item.find({ type: "liquid"});
        const cat4_data = await Item.find({ type: "document"});
        const cat5_data = await Item.find({ type: "ornament"});

        var cat_count_arr = [cat1_data.length,cat2_data.length,cat3_data.length,cat4_data.length,cat5_data.length];
        var cat_arr = ["drugs", "weapon", "liquid", "document", "ornament"];
        var max = Math.max(...cat_count_arr);
        var max_index = cat_count_arr.indexOf(max);
        var manjalpurArr = countItemVehicle(allManjalpurItems);
        var gotriArr = countItemVehicle(allGotriItems);
        var jpArr = countItemVehicle(allJPItems);
        var raopuraArr = countItemVehicle(allRaopuraItems);
        var sayajiganjArr = countItemVehicle(allSayajiganjItems);
        res.json({
            total_item_count: totalItemCount,
            total_vehicle_count: totalVehicleCount,
            manjalpur_item_count: manjalpurArr[0],
            manjalpur_vehicle_count: manjalpurArr[1],
            gotri_item_count: gotriArr[0],
            gotri_vehicle_count: gotriArr[1],
            jp_item_count: jpArr[0],
            jp_vehicle_count: jpArr[1],
            sayajiganj_item_count: raopuraArr[0],
            sayajiganj_vehicle_count: raopuraArr[1],
            raopura_item_count: sayajiganjArr[0],
            raopura_vehicle_count: sayajiganjArr[1],
            top_category: cat_arr[max_index]
        });
    }
});


app.post("/checkAudit", async (req, res) => {
    const auditData = await Audit.findOne({name: req.body.ps});
    if(auditData === null){
        res.json(false);
    }
    else{
        if(auditData.status === "on"){
            res.json(true);
        }
        else{
            res.json(false);
        }
    }
});

app.post("/auditSuccess", async (req, res) => {
    const auditUpdate = await Audit.findOneAndUpdate({name: req.body.ps}, {
        $set: {
          result: "success",
          status: "off",
        },
      });

      let message = new Notification({
        message: "Audit Drive was Successful",
        all: false,
        manjalpur: false,
        gotri: false,
        jp: false,
        sayaji: false,
        rao: false,
        head: true
    });
    message.save();
    res.json("Save Changes");
});

app.post("/auditFailure", async (req, res) => {
    const auditUpdate = await Audit.findOneAndUpdate({name: req.body.ps}, {
        $set: {
          result: "failure",
          status: "off",
          missing: req.body.missing_count
        },
      });

      let message = new Notification({
        message: "Audit Drive was not Successful",
        all: false,
        manjalpur: false,
        gotri: false,
        jp: false,
        sayaji: false,
        rao: false,
        head: true
    });
    message.save();
    res.json("Save Changes");
});


app.post("/findMap", async (req, res) => {
    const mapData = await Storage.findOne({name: req.body.ps});
    res.json(mapData);
});

app.post("/findVehicleMap", async (req, res) => {
    const mapData = await Vehicle.findOne({name: req.body.ps});
    res.json(mapData);
});


app.listen(5000, (req, res) => {
    console.log("Connected to Server");
});