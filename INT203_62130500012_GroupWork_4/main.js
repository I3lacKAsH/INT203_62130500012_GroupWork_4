const app = {
    data() {
        return {
            tasks: [
                {
                    url: 'https://images.unsplash.com/photo-1610002266468-d523466ad587?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
                    title: "Almora, Uttarakhand, India",
                    done: false,
                },
                {
                    url: 'https://images.unsplash.com/photo-1612275176266-8166c0479604?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
                    title: "Switzerland", done: false
                },
                {
                    url: 'https://images.unsplash.com/photo-1581665611754-08d420f9590f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
                    title: "Приморский край, Россия",
                    done: false,
                },
                {
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
        like(index) {
            this.tasks[index].done = !this.tasks[index].done;
        },
        search() {
            this.form.search = !this.form.search;
        },
        toggleView(index) {
            this.viewImg = this.tasks[index].url;
            this.hasView = true;
        },
        cancel() {
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