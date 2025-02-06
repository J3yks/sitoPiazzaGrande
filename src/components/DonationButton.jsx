

const DonationButton = () => {
   
  return (
     <form action="https://www.paypal.com/donate" method="post" target="_top">
       <input type="hidden" name="hosted_button_id" value="Q54W4ABGTCLRE" />
       <button type="submit"> DONA ORA &#10084; </button>
       </form>
  );
};

export default DonationButton;
