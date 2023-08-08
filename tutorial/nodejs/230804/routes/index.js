const express=require("express");
const router = express.Router();
const Controller = require("../controller/CComment");


router.get("/", Controller.main);
// get들을 모두 use로 고쳐도 작동됨
// use로 굳이 안 하는 이유는 get, post 등등으로 나눠서 쓰면
// 같은 링크에 대해 여러개를 쓸 수 있는데 use를 쓰면 위에서 use까지만 적용됨


router.get("/comments",Controller.comments);

router.get("/comments/:id",Controller.comment);
// :id로 하면 위에서 req에 들어오는 id 값을 안에 써줌
// :id 같은 값에 접근할때는 query가 아니라 params를 쓴다.


module.exports = router;
// 이렇게 다 설정한 router를 모듈화해서 넘긴다