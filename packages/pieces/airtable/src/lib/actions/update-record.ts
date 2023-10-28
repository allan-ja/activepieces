import { Property, DynamicPropsValue, createAction } from "@activepieces/pieces-framework";
import { airtableCommon } from "../common";
import { airtableAuth } from "../../index";

export const airtableUpdateRecordAction = createAction({
  auth: airtableAuth,
  name: 'airtable_update_record',
  displayName: 'Update Airtable Record',
  description: 'Updates a record into an airtable',
  props: {
    base: airtableCommon.base,
    tableId: airtableCommon.tableId,
    recordId: Property.ShortText({
      displayName: 'Track ID',
      required: true
  }),
    fields: airtableCommon.fields
  },
  async run(context) {
    const personalToken = context.auth
    const { base: baseId, tableId, recordId, fields } = context.propsValue
    const fieldsWithoutEmptyStrings: DynamicPropsValue = {}

    Object.keys(fields).forEach(k => {
      if (fields[k] !== '') {
        fieldsWithoutEmptyStrings[k] = fields[k]
      }
    })

    return airtableCommon.updateRecord({
      personalToken,
      baseId,
      tableId: tableId as string,
      recordId,
      fields: fieldsWithoutEmptyStrings,
    })
  },
})
