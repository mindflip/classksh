
// visitor counter
module.exports = async (req, res, next) => {
    try {
        // console.log(req.cookies);
        // console.log(req.cookies.count);
        // console.log(req.sessionID);
        if(!req.cookies.count && req.sessionID) {
            // console.log("test visitor counter");
            res.cookie('count', "cnt", { maxAge: 3600000, httpOnly: true });
            let now = new Date();
            let date = now.getFullYear() + "/" + (now.getMonth() + 1) + "/" + now.getDate();
            if(date != req.cookies.countDate) {
                res.cookie('countDate', date, { maxAge: 86400000, httpOnly: true });
    
                let visitorCountModel = require("./model/visitorCount.model");
                await visitorCountModel.findOne({name:"visitors"}, (err, counter) => {
                    // console.log(counter);
                    if(err) return next();
                    if(counter === null) {
                        visitorCountModel.create({name: "visitors", totalCount: 1, todayCount: 1, date: date});
                    } else {
                        counter.totalCount++;
                        if(counter.date == date) {
                            counter.todayCount++;
                        } else {
                            counter.todayCount = 1;
                            counter.date = date;
                        }
                        counter.save();
                    }
                });
            }
        }

        return next();
    } catch (err) {
        next(err);
    }
}