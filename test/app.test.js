import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../src/app.js';
chai.should();
chai.use(chaiHttp);
// const expect = chai.expect;

describe('/hello', () => {
    it('it should respond', (done) => {
        chai.request(app)
            .post('/hello')
            .send({})
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('msg');
                done();
            });
    });
});

describe('/healthcheck', () => {
    it('it should respond', (done) => {
        chai.request(app)
            .get('/healthcheck')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});

//test4