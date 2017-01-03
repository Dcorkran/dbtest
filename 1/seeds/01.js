exports.seed = function(knex, Promise) {
  return knex('user_job').del()
  .then(function(){
    return knex('job').del();
  })
  .then(function(){
    return knex('location').del();
  })
  .then(function(){
    return knex('login').del();
  })
  .then(function(){
    return knex("user").del();
  })

    .then(function(){
      const user = [{
        id:1,
        fname:'Dillon',
        lname:'Corkran',
        email:'dcorkran972@gmail.com',
        username:'dcorkran',
        phone_number:'2032197227',
        address: '1400 Little Raven Street',
        account_balance:50
      },{
        id:2,
        fname:'Aaron',
        lname:'Goodman',
        email:'gooooodman@gmail.com',
        username:'agoodman',
        phone_number:'7205619842',
        address: '900 Little Raven Street',
        account_balance:55
      }];
      return knex("user").insert(user);
    })
    .then(function(){
      const login = [{
        id:1,
        user_id:1,
        password_hash:'test',
        password_salt:'test'
      },{
        id:2,
        user_id:2,
        password_hash:'test',
        password_salt:'test'
      }];
      return knex('login').insert(login);
    })
    .then(function(){
      const location = [{
        id:1,
        name:'Galvanize',
        address:'1644 Platte St',
        lat:39.7576,
        long:105.0070
      }];
      return knex('location').insert(location);
    })
    .then(function(){
      const job = [{
        id:1,
        date:'2016-12-28',
        time:'13:30:00',
        status:'accepted',
        rate:12.00,
        start_time:'13:35:25',
        end_time:'14:01:20',
        location_id:1
      }];
      return knex('job').insert(job);
    })
    .then(function(){
      const user_job = [{
        id:1,
        requester_id:1,
        waiter_id:2,
        job_id:1
      }];
      return knex('user_job').insert(user_job);
    });
};
