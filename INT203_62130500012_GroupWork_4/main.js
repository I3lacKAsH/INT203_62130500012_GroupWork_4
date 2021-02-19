const app = {
    data() {
        return {
            tasks: [
                {
                    no : 0 ,
                    url: 'https://images.unsplash.com/photo-1610002266468-d523466ad587?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    title: "Almora, Uttarakhand, India",
                    done: false,
                },
                {
                    no : 1 ,
                    url: 'https://images.unsplash.com/photo-1612275176266-8166c0479604?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
                    title: "Switzerland", done: false
                },
                {
                    no : 2 ,
                    url: 'https://images.unsplash.com/photo-1581665611754-08d420f9590f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
                    title: "Приморский край, Россия",
                    done: false,
                },
                {
                    no : 3 ,
                    url: 'https://images.unsplash.com/photo-1587772989305-22eaf5c9f355?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    title: "Золотая Долина, Приморский край, Россия",
                    done: false,
                },
            ],
            form: {
                text: "",
                search: false,
            },
            hasView: false,
            viewImg: '',
        };
    },
    methods: {
        like(task) {
            this.tasks[task.no].done = !this.tasks[task.no].done;
        },
        search() {
            this.form.search = !this.form.search;
        },
        toggleView(task) {
            this.viewImg = this.tasks[task.no].url;
            this.hasView = true;
        },
        cancel() {
            this.form.search = !this.form.search
            this.form.text = '';
        },
        close() {
            this.hasView = false;
        }
    },
    computed: {
        countUndone() {
            return this.tasks.filter((t) => t.done).length;
        },
        searching() {
            return this.tasks.filter((member) => {
                return member.title.toLowerCase().includes(this.form.text.toLowerCase());
            });
        },
    },
};
Vue.createApp(app).mount("#app");
