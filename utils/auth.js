const Auth = (req, res, next) => {
    if(!req.session.user_id) {
        res.redirect('/home');
    } else {
        // haven't made any of this yet
    }
}