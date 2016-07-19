/* global define, it, describe, expect, assert */

// Actions test
import { fetchPost, types } from './actions';

describe('Detail actions', () => {
  it('Should create an action to get an items', (done) => {
    const apiPromise = fetchPost(1);
    expect(apiPromise).to.have.property('type').to.equal(types.FETCH_ITEM);
    expect(Promise.resolve(apiPromise.payload)).to.eventually.have.property('data')
    .that.is.an('object').to.include.keys(['id', 'title', 'body']).notify(done);
  });
});

// Reducer test
import { reducer } from './reducers';

describe('Detail reducer', () => {
  it('Should return the initial state (Chai.expect) ', () => {
    const initialstate = reducer(undefined, {});
    expect(initialstate).to.be.an('object')
     .to.have.property('post').to.eql(null);
  });

  it('Should mutate the state', (done) => {
    expect(
       reducer([], {
         type: types.FETCH_ITEM,
         payload: {
           data: {
             userId: 1,
             id: 1,
             title: 'Titulo 1',
             body: 'Contenido 1',
           },
         },
       })
     ).to.eql({
       post: {
         userId: 1,
         id: 1,
         title: 'Titulo 1',
         body: 'Contenido 1',
       },
     });
    done();
  });
});
