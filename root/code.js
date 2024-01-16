var data = [
    {
        manager: 'Team Lead Accounting',
        jobid: 'JQDP79',
        exp: '0 years',
        location: 'Mumbai',
        jobrole: 'Accountant',
        skill: 'Manager',
        emptype: 'Permenant'
    },
    {
        manager: 'Accountant',
        jobid: 'JQDP78',
        exp: ' years',
        location: '',
        jobrole: 'Accountant',
        skill: '',
        emptype: ''
    },
    {
        manager: 'TL-Domestic Accounting',
        jobid: 'JQDP747',
        exp: '0 years',
        location: 'Mumbai',
        jobrole: 'TL-Domestic Accounting',
        skill: '',
        emptype: 'Permenant'
    },
    {
        manager: 'Client Relationship Manager',
        jobid: 'JQDP74',
        exp: '0 years',
        location: '',
        jobrole: 'TL/Client Relationship Manager',
        skill: '',
        emptype: 'Permenant'
    },
    {
        manager: 'Sr. US Accountant',
        jobid: 'JQDP66',
        exp: '2 years | 3.00 Lac',
        location: 'Pune',
        jobrole: 'Sr. US Accountant',
        skill: 'Cloud Computing',
        emptype: 'Full Time'
    },
    {
        manager: 'AP Associate',
        jobid: 'JQDP65',
        exp: '2.8 years | 3.00 Lac',
        location: 'Pune',
        jobrole: 'AP Associate',
        skill: '',
        emptype: 'Full Time'
    },
    {
        manager: 'Client Relationship Manager',
        jobid: 'JQDP74',
        exp: '2 years',
        location: 'Mumbai',
        jobrole: 'Client Relationship Manager',
        skill: 'manager',
        emptype: 'permenant'
    },
]

function loadData(){
    let content = '';

    data.forEach(p => {
        content += `
        <div class="col-md-4 col-sm-12">
                  <div class="inner-card">
                  <a href="secondPage.html">${p.manager}</a>
                      <ul class="no-style-type">
                      <li><span class="text-bold">Job ID:</span>&nbsp;${p.jobid}</li>
                      <li><span class="text-bold">Experience:</span>&nbsp;<span>${p.exp}</span><span></span></li>
                      <li><span class="text-bold">Location:</span>&nbsp;${p.location}</li>
                      <li><span class="text-bold "> Job Role:</span>&nbsp;${p.jobrole}</span></li>
                      <li><span class="text-bold "> Skill:</span>&nbsp;${p.skill}</li>
                      <li><span class="text-bold">Employment Type:</span>&nbsp;${p.emptype}</li>
                    </ul>
                    <a href="">View Details</a>
                  </div>
              </div>
      `
    });
    
    document.getElementById("peopledata").innerHTML = content;
}
