const app = new Vue(
    {
        el: '#root',
        data: {
            emailsArray: [],
        },
        created() {
            for(let i = 0; i < 10; i++) {
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail', {})
                .then((resp) => {
                    const randomEmails = resp.data.response;
                    let myEmailsArray = this.emailsArray;
                    myEmailsArray.push(randomEmails)
                });
            }
        }
    }
)  