class Github{

 constructor(){

   this.client_id = 'd9308aacf8b204d361fd';

  this.client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b';


 }
 

 async getUser(user){


     const responseProfile = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

     const responseRepos = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);

     const profile = await responseProfile.json();

     const repos = await responseRepos.json(); 

     return{

        profile,
        repos


     }




 }


}
