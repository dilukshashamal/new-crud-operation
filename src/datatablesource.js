export const userColumns = [
  
  {
    field: "user",
    headerName: "User",
    width: 200,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 270,
  },

  {
    field: "address",
    headerName: "Address",
    width: 230,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    width: 180,
  },
  
];
