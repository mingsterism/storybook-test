import Button from './Button.vue';

export default {
  /* 👇 The title prop is optional.
  * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
  * to learn how to generate automatic titles
  */
  title: 'Button',
  component: Button,
};

//👇 We create a “template” of how args map to rendering
const Template = (args) => ({
  components: { Button },
  setup() {
    //👇 The args will now be passed down to the template
    return { args };
  },
  methods: {
	  handleClick() {
		console.log("Click")
	  }
  },
  template: '<Button v-bind="args" :buttonText="args.buttonText" />',
});


export const normalButton = () => ({
    components: { Button },
    template: '<Button>Normal Button</Button>',
});

export const primaryButton = () => ({
    components: { Button },
    template: '<Button color="primary">Normal Button</Button>',
});


//👇 Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  label2: "test",
  buttonText: "Buttonss"
};
