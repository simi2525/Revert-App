import { TextField } from "@mui/material";
import SelectComponent from "./SelectComponent";

const FormConfig = [
  {
    category: "Patient Information",
    components: [
      {
        Component: TextField,
        id: "patient_id",
        name: "patient_id",
        label: "Patient id",
        type: "text",
      },
      {
        Component: TextField,
        id: "age",
        name: "age",
        label: "Age",
        type: "number",
      },
      {
        Component: SelectComponent,
        id: "sex",
        labelId: "sex",
        name: "sex",
        label: "Sex",
        items: [
          { value: "0", label: "Female" },
          { value: "1", label: "Male" },
        ],
      },
      {
        Component: TextField,
        id: "overall_survival_months",
        name: "overall_survival_months",
        label: "Overall survival months",
        type: "number",
      },
      {
        Component: TextField,
        id: "living_status",
        name: "living_status",
        label: "Living status",
        type: "number",
      },
    ],
  },
  {
    category: "General Information",
    components: [
      {
        Component: TextField,
        id: "sample_type",
        name: "sample_type",
        label: "Sample type",
        type: "number",
      },
      {
        Component: TextField,
        id: "specimen_type",
        name: "specimen_type",
        label: "Specimen type",
        type: "number",
      },
      {
        Component: TextField,
        id: "time_from_met_dx_to_sequencing",
        name: "time_from_met_dx_to_sequencing",
        label: "Time from MET dx to sequencing",
        type: "number",
      },
      {
        Component: TextField,
        id: "time_to_81_months",
        name: "time_to_81_months",
        label: "Time to 81 months",
        type: "number",
      },
      {
        Component: TextField,
        id: "chemo_exposure",
        name: "chemo_exposure",
        label: "Chemo exposure",
        type: "number",
      },
    ],
  },
  {
    category: "Metastases Information",
    components: [
      {
        Component: TextField,
        id: "metastasectomy",
        name: "metastasectomy",
        label: "Metastasectomy",
        type: "number",
      },
      {
        Component: TextField,
        id: "metastases_site_first_bone",
        name: "metastases_site_first_bone",
        label: "Metastases site first bone",
        type: "number",
      },
      {
        Component: TextField,
        id: "metastases_site_first_brain",
        name: "metastases_site_first_brain",
        label: "Metastases site first brain",
        type: "number",
      },
      {
        Component: TextField,
        id: "metastases_site_first_gynecological",
        name: "metastases_site_first_gynecological",
        label: "Metastases site first gynecological",
        type: "number",
      },
      {
        Component: TextField,
        id: "metastases_site_first_liver",
        name: "metastases_site_first_liver",
        label: "Metastases site first liver",
        type: "number",
      },
      {
        Component: TextField,
        id: "metastases_site_first_ln",
        name: "metastases_site_first_ln",
        label: "Metastases site first ln",
        type: "number",
      },
      {
        Component: TextField,
        id: "metastases_site_first_lung",
        name: "metastases_site_first_lung",
        label: "Metastases site first lung",
        type: "number",
      },
      {
        Component: TextField,
        id: "metastases_site_first_pelvis",
        name: "metastases_site_first_pelvis",
        label: "Metastases site first pelvis",
        type: "number",
      },
      {
        Component: TextField,
        id: "metastases_site_first_peritoneum_omentum_abdomen",
        name: "metastases_site_first_peritoneum_omentum_abdomen",
        label: "Metastases site first peritoneum omentum abdomen",
        type: "number",
      },
      {
        Component: TextField,
        id: "metastatic_biopsy_site",
        name: "metastatic_biopsy_site",
        label: "Metastatic biopsy site",
        type: "number",
      },
      {
        Component: TextField,
        id: "other_metastasis_sites",
        name: "other_metastasis_sites",
        label: "Other metastasis sites",
        type: "number",
      },
    ],
  },
  {
    category: "Mutation Information",
    components: [
      {
        Component: TextField,
        id: "fraction_genome_altered",
        name: "fraction_genome_altered",
        label: "Fraction genome altered",
        type: "number",
      },
      {
        Component: TextField,
        id: "gene_panel",
        name: "gene_panel",
        label: "Gene panel",
        type: "number",
      },
      {
        Component: TextField,
        id: "msi_score",
        name: "msi_score",
        label: "MSI score",
        type: "number",
      },
      {
        Component: TextField,
        id: "msi_status",
        name: "msi_status",
        label: "MSI status",
        type: "number",
      },
      {
        Component: TextField,
        id: "mutation_count",
        name: "mutation_count",
        label: "Mutation count",
        type: "number",
      },
    ],
  },
  {
    category: "Tumor Information",
    components: [
      {
        Component: TextField,
        id: "patient_tumor_grade",
        name: "patient_tumor_grade",
        label: "Patient tumor grade",
        type: "number",
      },
      {
        Component: TextField,
        id: "primary_tumor_site",
        name: "primary_tumor_site",
        label: "Primary tumor site",
        type: "number",
      },
      {
        Component: TextField,
        id: "primary_tumor_location",
        name: "primary_tumor_location",
        label: "Primary tumor location",
        type: "number",
      },
      {
        Component: TextField,
        id: "mCRC_type",
        name: "mCRC_type",
        label: "mCRC type",
        type: "number",
      },
      {
        Component: TextField,
        id: "stage_at_diagnostic",
        name: "stage_at_diagnostic",
        label: "Stage at diagnostic",
        type: "number",
      },
    ],
  },
];

export default FormConfig;
